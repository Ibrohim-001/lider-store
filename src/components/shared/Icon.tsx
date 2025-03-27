import React, { type SVGProps } from 'react';
import type { IconType } from '../../types/icon-type';
import * as Icons from '../icons/svgs';

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
};

export const Icon: React.FC<IconProps> = ({ icon, ...props }) =>
  React.createElement(Icons[icon], props);

