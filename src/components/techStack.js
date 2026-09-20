import styled from 'styled-components'

/*
title: string (optional heading, defaults to 'Tech Stack'. Pass null to hide it)
groups: { label: string, items: string[] }[]
*/

const TechStack = ({ title = 'Tech Stack', groups = [] }) => {
  const visibleGroups = groups.filter((group) => group.items.length > 0)

  return (
    <TechStackDiv>
      {title && <h3>{title}</h3>}
      {visibleGroups.map((group) => (
        <div className='tech-group' key={group.label}>
          <p className='body-2 bold no-margin'>{group.label}:</p>
          {group.items.map((item, index) => (
            <div className='course-span' key={`${item}-${index}`}>
              <p className='body-2 bold'>{item}</p>
            </div>
          ))}
        </div>
      ))}
    </TechStackDiv>
  )
}

const TechStackDiv = styled.div`
  .tech-group + .tech-group {
    margin-top: 24px;
  }
`

export default TechStack
