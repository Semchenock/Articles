import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Button',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineSquareSizeM = Template.bind({});
OutlineSquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
  square: true,
};

export const OutlineSquareSizeL = Template.bind({});
OutlineSquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  square: true,
};

export const OutlineSquareSizeXL = Template.bind({});
OutlineSquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  square: true,
};
