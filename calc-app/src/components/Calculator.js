import React, { Component } from 'react';

import CalculatorEngine from './CalculatorEngine';

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
    handleOnDigit() {
        calculator.inputDigit();

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

        }));
    }

    handleOnHistorySelected(index){
        calculator.loadHistory(index);
    }

    handleOnMultiply() {
        calculator.multiply();
    }

    handleOnSubstract() {
        calculator.substract();
    }

    handleOnToggleStory(){

    }

    handleOnToggleSign(){
        calculator.toggleSign();
    }


    render(){
        return (
            <div className="row">
                <div  className="calculator col-md-5 mx-auto">
            
                </div>

            </div>
        );
    }

}