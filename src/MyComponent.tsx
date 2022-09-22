import React from 'react'
import styles from './MyComponent.module.css'
import { registerVevComponent } from '@vev/react'

type Props = {
  title: string
  img: any
}

const MyComponent = ({ img, title = 'Vev' }: Props) =>
  <div
    style={{
      background: img ? 'url("' + img.url + '")' : undefined,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%'
    }}>
    <h1 className={styles.text}>
      {title}
    </h1>
  </div>

registerVevComponent(MyComponent, {
  name: 'Blend Mode Header',
  type: 'section',
  editableCSS: [
    {
      selector: styles.text,
      properties: ['color', 'font-size', 'font-family']
    }
  ],
  props: [
    {
      type: 'image',
      name: 'img',
      title: 'Background'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Header',
      initialValue: 'Header text'
    }
  ]
})

export default MyComponent
