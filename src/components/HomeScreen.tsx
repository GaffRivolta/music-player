import React from 'react';
import { Playlist } from './Playlist';

type HomeScreenProps = {
    onPlayButtonClick: ( selectedTrack: any, prevPlayStatus: string, playStatus: string ) => void,
    actualPlayStatus: string,
    trackId: number,
    onPlayPauseFooterButtonClick: ( prevPlayStatus: string, playStatus: string ) => void,
}

export const HomeScreen = (
    { onPlayButtonClick, actualPlayStatus, trackId, onPlayPauseFooterButtonClick }: HomeScreenProps) => {
    return (
       <Playlist 
            onPlayButtonClick={onPlayButtonClick} 
            actualPlayStatus={actualPlayStatus}
            trackId={trackId}
            onPlayPauseFooterButtonClick={onPlayPauseFooterButtonClick}
            />
    );
}