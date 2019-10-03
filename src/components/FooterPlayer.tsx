import React from 'react';

type FooterPlayerProps = {
    selectedTrack: {
        id: number,
        name: string,
        artist: string,
        album: string,
        genre: string,
        year: string,
        image: string,
        src: string,
    },
    onPlayPauseFooterButtonClick: ( prevPlayStatus: string, playStatus: string ) => void,
    actualPlayStatus: string,
}

export const FooterPlayer = (
    {selectedTrack, onPlayPauseFooterButtonClick, actualPlayStatus}: FooterPlayerProps) => {

    const onPlayPauseClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        
        let prevPlayStatus: string
        let playStatus: string

        if ( actualPlayStatus === 'paused'){
            prevPlayStatus = actualPlayStatus;
            playStatus = 'playing';  
            onPlayPauseFooterButtonClick(prevPlayStatus,playStatus);
        }
        if ( actualPlayStatus === 'playing'){
            prevPlayStatus = actualPlayStatus;
            playStatus = 'paused';
            onPlayPauseFooterButtonClick(prevPlayStatus,playStatus);
        }
        
    }

    const onStopClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {

        let prevPlayStatus: string
        let playStatus: string

        if ( actualPlayStatus === "playing" || actualPlayStatus === "paused"){
            prevPlayStatus = actualPlayStatus;
            playStatus = 'stopped';
            onPlayPauseFooterButtonClick(prevPlayStatus,playStatus);      
        }
        //onPlayButtonClick(track,prevPlayStatus,playStatus);
    }

    return (
        <div>
            <span>{selectedTrack.name}</span>
            <button onClick={onPlayPauseClick}> Play/Pause FOOTER </button>
            <button onClick={onStopClick}> STOP FOOTER </button>
        </div>
       
    );
}