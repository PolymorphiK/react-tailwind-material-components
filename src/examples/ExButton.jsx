import React from 'react';
import Button from '../material/Button';
import {ReactComponent as Star} from './svgs/icon_star.svg';

export default function ExButton() {

    return (
        <Button className="inline-flex items-center space-x-2 p-1" icon={Star} text='Button' onClick={(ev) => {console.log(ev)}} />
    );
}