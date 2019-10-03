import React from 'react';

type ItemProps = {
    track: {
        id: number,
        name: string,
        artist: string,
        album: string,
        genre: string,
        year: string,
        image: string,
        src: string,
    },
    onPlayButtonClick: ( selectedTrack: any, prevPlayStatus: string, playStatus: string ) => void,
    actualPlayStatus: string,
    trackId: number,
    onPlayPauseFooterButtonClick: ( prevPlayStatus: string, playStatus: string ) => void,
}

export const PlaylistItem = (
    { track, onPlayButtonClick, actualPlayStatus, trackId, onPlayPauseFooterButtonClick }: ItemProps) => {

    const onPlayPauseClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {

        let prevPlayStatus: string
        let playStatus: string
        
        if (trackId === track.id){
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
            if ( actualPlayStatus === 'stopped'){
                
                prevPlayStatus = actualPlayStatus;
                playStatus = 'playing';
                onPlayPauseFooterButtonClick(prevPlayStatus,playStatus);
            }
        }else {
            if ( actualPlayStatus === 'paused'){
                prevPlayStatus = actualPlayStatus;
                playStatus = 'playing';
                onPlayButtonClick(track,prevPlayStatus,playStatus);                
            }
            if ( actualPlayStatus === 'playing'){
                prevPlayStatus = actualPlayStatus;
                playStatus = actualPlayStatus;
                onPlayButtonClick(track,prevPlayStatus,playStatus);
            }
            if ( actualPlayStatus === 'stopped'){
                
                prevPlayStatus = actualPlayStatus;
                playStatus = 'playing';
                onPlayButtonClick(track,prevPlayStatus,playStatus);
            }
        }
    }

    const onStopClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {

        let prevPlayStatus: string
        let playStatus: string
        if (trackId === track.id){
            if ( actualPlayStatus === "playing" || actualPlayStatus === "paused"){
                prevPlayStatus = actualPlayStatus;
                playStatus = 'stopped';
                onPlayButtonClick(track,prevPlayStatus,playStatus);      
            }
        }
    }

    return (
        <div key={track.id}>
            <span>{track.name}</span>
            <button onClick={onPlayPauseClick} > Play / Pause </button>
            <button onClick={onStopClick}> STOP </button>
        </div>         
        
    );
}