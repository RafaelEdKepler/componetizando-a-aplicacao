import { useEffect, useState } from 'react';
import '../styles/sidebar.scss';
import { api } from '../services/api';

import { Button } from "./Button";

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  setSelectedGenreId: (id: number) => void,
  genres: GenreResponse[],
  selectedGenreId: number,
}

export function SideBar(props : SideBarProps) {

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}