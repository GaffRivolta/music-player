import React, { useRef } from 'react';
import { PlaylistItem } from './PlaylistItem';
import { FooterPlayer } from './FooterPlayer';

/*

Id:
Nombre:
Artista:
Album:
Género:
Año:
Imagen:
Archivo:

*/

type PlaylistProps = {
    onPlayButtonClick: ( selectedTrack: any, prevPlayStatus: string, playStatus: string ) => void,
    actualPlayStatus: string,
    trackId: number,
    onPlayPauseFooterButtonClick: ( prevPlayStatus: string, playStatus: string ) => void,
}

export const Playlist = (
    { onPlayButtonClick, actualPlayStatus, trackId, onPlayPauseFooterButtonClick }: PlaylistProps) => {

    const tracks = [
        {
            id: 1,
            name: 'Mista Swing feat. Monday Michiru (Album Mix)',
            artist: 'Jazztronik',
            album: 'Piano Vocalism',
            genre: 'Soulful House',
            year: '2009',
            image: 'mista swing.jpg',
            src: 'mista swing.mp3',
        },
        {
            id: 2,
            name: 'Travelling feat. Joel Edwards',
            artist: 'Sugiurumn',
            album: 'What Time Is Summer Of Love',
            genre: 'Electronic',
            year: '2007',
            image: 'travelling.jpg',
            src: 'travelling.mp3',
        },
        {
            id: 3,
            name: 'Without You feat. Monkey Magik',
            artist: 'Fantastic Plastic Machine',
            album: 'FPM',
            genre: 'Electronic',
            year: '2009',
            image: 'without you.jpg',
            src: 'without you.mp3',
        },
    ]

    const songs = tracks.map(track => {
        return (
            <PlaylistItem 
                track={track}
                onPlayButtonClick={onPlayButtonClick}
                actualPlayStatus={actualPlayStatus}
                trackId={trackId}
                onPlayPauseFooterButtonClick={onPlayPauseFooterButtonClick}
            />          
        );
    });
      
    return (
        <div>
            {songs}        
        </div>
               
    );    
    
    /*return (
        <ul>
            <PlaylistItem tracks={tracks}/>
        </ul>         
    );*/
}