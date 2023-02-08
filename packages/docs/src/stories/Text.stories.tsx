import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-elton/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur distinctio enim ex id voluptate optio provident vitae, maxime qui deserunt incidunt sed voluptatem, nam obcaecati, minus molestias ratione quaerat?',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
