import React, { Component } from 'react';

import CalculatorEngine from './CalculatorEngine';
import Display from './Display';
import ControlPanel from './ControlPanel';
import Keypad from './Keypad';
import History from './History';

const calculator = new CalculatorEngine();

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state ={
            expression: '',
            value: '',
            history: [],
            showHistory:false
        };

        // event bind
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnClearAll = this.handleOnClearAll.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
        this.handleOnDecimalPoint = this.handleOnClearHistory.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnHistorySelected = this.handleOnHistorySelected.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnSubstract = this.handleOnSubstract.bind(this);
        this.handleOnToggleStory = this.handleOnToggleStory.bind(this);
    }

    //eventos
    handleOnAdd(){
        //ejecuta el calculo
        calculator.add();
        // agregar cambios a state
        this.setState(() =>({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnClear(){

        calculator.clear();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnClearAll(){
        calculator.clearAll();

        this.setState(() =>({
            history:calculator.getHistory(),
            value: calculator.getValue().toString(),
            expression: calculator.getExpression()
        }))
    }

    handleOnClearHistory(){
        calculator.clearHistory();

        this.setState(() =>({
            history:calculator.getHistory(),
            showHistory: false
        }))
    }

    handleOnDecimalPoint(){
        calculator.inputDecimal();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnDelete() {
        calculator.delete();

        this.setState(() =>({
            value:calculator.getValue()
        }));
    }

    // to do: add state changes
    handleOnDigit(number) {
        calculator.inputDigit(number);

        this.setState(() => ({
            value: calculator.getValue()
        }));
    }

    handleOnDivide() {
        calculator.divide();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnEquals() {
        calculator.equals();
        this.setState(()=> ({
            value: calculator.getValue().toString(),
            expression: calculator.getExpression(),
            history: calculator.getHistory()
        }));
    }

    handleOnHistorySelected(index){
        calculator.loadHistory(index);
        this.setState(()=>({
            value: calculator.getValue().toString()
        }));
    }

    handleOnMultiply() {
        calculator.multiply();
        this.setState(()=>({
            value:  calculator.getValue().toString(),
            expression:calculator.getExpression()
        }));
    }

    handleOnSubstract() {
        calculator.substract();
        this.setState(()=>({
            value: calculator.getValue().toString(),
            expression: calculator.getExpression()
        }));
    }

    handleOnToggleStory(){
        this.setState(()=>({
            showHistory: !this.showHistory
        }));
    }

    handleOnToggleSign(){
        calculator.toggleSign();
        this.setState(()=>({
            value:calculator.getValue()
        }));
    }


    render(){
        return (
            <div className="row">
                <div  className="calculator col-md-5 mx-auto">
                    <Display value={this.state.value} expression= {this.state.expression}/>
                    <ControlPanel  anyHistory = {this.state.history.length > 0}
                     onToggleHistory={this.handleOnToggleStory}/>
                     {
                         !this.state.showHistory &&
                         <Keypad onDigit = {this.handleOnDigit}
                            onAdd= {this.handleOnAdd}
                            onSubstract = {this.handleOnSubstract}
                            onDivide = {this.handleOnDivide}
                            onMultiply = {this.handleOnMultiply}
                            onDecimalPoint = {this.handleOnDecimalPoint}
                            onEquals = {this.handleOnEquals}
                            onClear={this.handleOnClear}
                            onClearAll= {this.handleOnClearAll}
                            onDelete={this.handleOnDelete}
                            onToggleSign= {this.onToggleSign}
                         />
                     }
                     {
                         this.state.showHistory &&
                         <History history= {this.state.history}
                            onClearHistory={this.handleOnClearHistory}
                            onSelected={this.handleOnHistorySelected}/>
                     }
                </div>
                
            </div>
        );
    }

}