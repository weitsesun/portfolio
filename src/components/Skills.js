import React from 'react'
import skillsData from '../data/skillsData'
import '../styles/Skills.css'
// import {
//   skills_container,
//   header_container,
//   topic,
//   bar,
//   table_container,
//   genre_container,
//   genre,
//   table,
// } from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <div className={'skills_container'}>
      <div className={'header_container'}>
        <div className={'topic'}>MY SKILLS</div>
        <div className={'bar'}></div>
      </div>

      <div className={'genre_container'}>
        {skillsData.map((genre) => (
          <SkillTable key={genre.name} data={genre} />
        ))}
      </div>
    </div>
  )
}

function SkillTable({ data }) {
  return (
    <div className={'table_container'}>
      <div className={'genre'}>{data.name}</div>
      <div className={'table'}>
        {data.skills.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  )
}
