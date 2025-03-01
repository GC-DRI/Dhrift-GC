import Slide from '@mui/material/Slide';
// import CodeEditorComponent from './PythonEditorComponent';
import InterpreterComponent from './InterpreterComponent';
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef } from 'react';
import yaml from '../../config.yml'

export default function SlideoutEditor(props) {
    const [editorSlider, setEditorSlider] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        setText(window.localStorage.getItem('code') || '');
    }, [])


    const commitCode = (newText) => {
        window.localStorage.setItem('code', newText);
    }


    const handleEditorSlider = () => {
        setEditorSlider(!editorSlider);
    }
    if (yaml.slideout.enabled) {
        return (
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: 300,
                        right: 0,
                        display: editorSlider ? 'none' : 'block'
                    }}
                >
                    <Button onClick={handleEditorSlider}
                        style={{
                            backgroundColor: 'black',
                        }}
                    >
                        {editorSlider ? <ArrowForwardIcon
                            style={{
                                color: 'white',
                            }}
                        /> : <CodeIcon
                            style={{
                                color: 'white',
                            }}
                        />}
                    </Button>
                </div>
                <Slide
                    direction="left"
                    in={editorSlider}
                    style={{
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        top: 300,
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div>
                        <Button onClick={handleEditorSlider}
                            style={{
                                backgroundColor: 'black',
                            }}
                        >
                            <ArrowForwardIcon
                                style={{
                                    color: 'white',
                                }} />
                        </Button>
                        {/* <CodeEditorComponent minLines={10} onChange={commitCode} defaultCode={text}
                        language={yaml.slideout.language} /> */}
                        <InterpreterComponent language={ yaml.slideout.language } onChange={commitCode} defaultCode={text} {...props} />
                    </div>
                </Slide>
            </div>
        )
    }else{
        return null;
    }
}