import React, { Component } from 'react';
import MainTitle from '../common/MainTitle';
import Result from '../common/Result';
import TourHot from './../common/TourHot';
class Aboutpage extends Component {
    render() {
        return (
            <div>
                <TourHot content="ABOUT PANAGEA" /> 
                <div className="container margin_80_55">
                <MainTitle title ="Why Choose Panagea" content="Cum doctus civibus efficiantur in imperdiet deterruisset."/>
                <div className="row">
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>
                <Result img="pe-7s-medal" header="+ 1000 Customers" content="Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris."/>

                </div>
                </div>
            </div>
        );
    }
}

export default Aboutpage;