import React from 'react'
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid'

const Grid = () => {
  return (
    <section id="About">
        <BentoGrid>
            {[{ title:'Title 1', description:'Description1', id: 1}].map(
                (item) => (
                    <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    />
                )
            )}
        </BentoGrid>
    </section>
  )
}

export default Grid
