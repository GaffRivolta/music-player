import React, { useRef, useState, useEffect } from 'react';
import { HomeScreen } from './HomeScreen';
import { FooterPlayer } from './FooterPlayer';

/*type SelectedTrackState = {
    track?: {                   //opcional??
        id: number,
        name: string,
        artist: string,
        album: string,
        genre: string,
        year: string,
        image: string,
        src: string,
    };
}*/

//export const App = ({ track }: SelectedTrackState) => {
export const App = () => {    

    const [selectedTrack,setSelectedTrack] = useState(   
    {
        id: 0,
        name: '',
        artist: '',
        album: '',
        genre: '',
        year: '',
        image: '',
        src: ''   
    } /*as SelectedTrackState*/);

    const [playStatus,setPlayStatus] = useState('stopped');
    const [prevPlayStatus, setPrevPlayStatus] = useState('');
    //const [currentTrackId, setCurrentTrackId] = useState (0);

    const player = useRef<HTMLAudioElement>(null!);
    //let player = useRef<HTMLAudioElement | null> (null);

    useEffect(
        () => {
        
            let track;
            switch(selectedTrack.id) {
                case 1:
                track = selectedTrack.src;
                break;
                case 2:
                track = selectedTrack.src;
                break;
                case 3:
                track = selectedTrack.src;
                break;
                default:
                break;
            }
            if(track) {
                player.current.src = track;
                player.current.play() //Ver esta parte
            }
        },
        [selectedTrack]
    );

    useEffect(
        () => {
            if (playStatus === "paused") {
            player.current.pause();
            } else if (playStatus === "stopped") {
                player.current.pause();
                player.current.currentTime = 0;
                //this.setState({ selectedTrack: null });
                setSelectedTrack({
                    id: 0,
                    name: '',
                    artist: '',
                    album: '',
                    genre: '',
                    year: '',
                    image: '',
                    src: ''
                });
            } else if (
                playStatus === "playing" &&
                prevPlayStatus === "paused"
            ) {
                player.current.play();
            }
        },
        [playStatus,prevPlayStatus,setSelectedTrack]
    );
    

    const onPlayButtonClick = (selectedTrack : any, prevPlayStatus: string, playStatus: string) => {
        setSelectedTrack(selectedTrack);

        setPrevPlayStatus(prevPlayStatus);
        setPlayStatus(playStatus);
    };

    const onPlayPauseFooterButtonClick = (prevPlayStatus: string, playStatus: string) => {
        setPrevPlayStatus(prevPlayStatus);
        setPlayStatus(playStatus);
    };


    const selectedTrackData = selectedTrack;
    const actualPlayStatus = playStatus;
    const trackId = selectedTrack.id;

    return (
        <div className="container">           
                <HomeScreen 
                    onPlayButtonClick={onPlayButtonClick}
                    actualPlayStatus={actualPlayStatus}
                    trackId={trackId}
                    onPlayPauseFooterButtonClick={onPlayPauseFooterButtonClick}
                />                  
                <FooterPlayer 
                    selectedTrack={selectedTrackData}
                    onPlayPauseFooterButtonClick={onPlayPauseFooterButtonClick}
                    actualPlayStatus={actualPlayStatus}
                />
                <audio ref={player}/>                         
        </div>
    );
}