import React from 'react';
import axios from 'axios';
import WordsTemplate from '../component/Words/WordsTemplate';
import WordsSelect from '../component/Words/WordsSelect';
import WordsForm from '../component/Words/WordsForm';
import WordsItemList from '../component/Words/WordsItemList';
import info from '../info';

class Words extends React.Component {
    state = {        
        question: {},
        index: 0,   
        limit: 10, 
        hanjas: [],
        result: [],
        imgs: [],
        learning: false,
        showDesc: false,
        firstTry: true
    }
    fetchGetInfo = async(data) => {        
        let order = "";
        switch (data.type) {
            case 1:  
                order = "sounds"; 
                break;
            case 2:
                order = "correct/(correct%2Bwrong)"; 
                break;
            case 3:
                order = "correct%2Bwrong"; 
                break;        
            case 4:
                order = "random()";
                break;
            default:
                break;
        }                
        const get = await axios.get(`http://${info.ip()}:${info.port()}/wget?order=${order}&limit=${this.state.limit}`);
        this.setState({
            index: 0,            
            hanjas: get.data,
            learning: true,
            showDesc: false,
            result: [],
            firstTry: true,
            type: data
        });        
    }

    handleStart = async(data) => {
        await this.fetchGetInfo(data);
        await this.getQuestion();        
    }
    
    handleStop = async() => {    
        this.setState({
            hanjas: this.state.hanjas.map(h => {
                let r = this.state.result.find(res => res.id === h.id);
                h.correct = r.correct;
                h.wrong = r.wrong;
                return h;
            }),
            question: {},
            index: 0,  
            learning: false,
            showDesc: false
        });  

        let data = JSON.stringify(this.state.result);        
        await axios.get(`http://${info.ip()}:${info.port()}/wset?result=${data}`);
        let retry = window.confirm("다시 하시겠습니까?");
        if(retry) {
            this.setState({
                result: [],
                learning: true
            });
            this.getQuestion();
        }  
    }

    getQuestion = () => {             
        let {index, hanjas, limit, result} = this.state;
        if(index === limit) {
            this.handleStop();
        } else {
            this.setState({
                result: result.concat({
                    id: hanjas[index].id,
                    correct: hanjas[index].correct,
                    wrong: hanjas[index].wrong,
                })
            });
            this.setState({question: hanjas[index], firstTry: true});
            this.setState({index: index + 1, showDesc: false});            
        }        
    }

    checkAnswer = async(data) => {
        let {sounds, id, correct, wrong} = this.state.question;        
        this.setState({
            imgs: []
        });
        if(data.answer === sounds) {            
            this.setState({
                result: this.state.result.map(r => {
                    if(r.id === id) {
                        if(this.state.firstTry) {
                            r.correct = correct + 1;                            
                        } else {
                            r.wrong = wrong + 1;
                        }                          
                    } 
                    return r;
                })
            });        
            this.getQuestion();
        } else {            
            let {shapes} = this.state.question;
            for(let i=0; i<shapes.length; i++) {                
                let get = (await axios.get(`http://${info.ip()}:${info.port()}/get?shape=${shapes[i]}`));                
                if(get.data.length > 0) {
                    this.setState({
                        imgs: this.state.imgs.concat(get.data[0])
                    });
                }
            }            

            this.setState({
                showDesc: true,
                firstTry: false,       
            });                        
        }
    }

    render() {
        let {question, showDesc, imgs, learning} = this.state;
        let rate = (question.correct/(question.correct + question.wrong)) * 100;
        if(isNaN(rate)) rate = 0.0;
        rate = '[' + rate.toFixed(0) + '%]';
        return (
            <WordsTemplate select={<WordsSelect learning={learning} onStart={this.handleStart} onStop={this.handleStop}/>} 
                            form={<WordsForm question={question.shapes} onCheckAnswer={this.checkAnswer}/>}>
                <WordsItemList showDesc={showDesc} imgs={imgs} desc={question.sounds} rate={rate}/>
            </WordsTemplate>
        );
    }
}

export default Words;