/**
 * A React functional component that renders a call-to-action (CTA) button.
 *
 * The CTA button can have one of three styles: primary, secondary, or tertiary.
 * The style is determined by the `category` field in the component's props.
 *
 * The CTA button is rendered as a link with the specified `href`, `text`, and `target` values from the `link` field in the component's props.
 *
 * @param fields - An object containing the CTA button's fields, including the link and category.
 * @param fields.link - An object containing the link's `href`, `text`, and `target` values.
 * @param fields.category - A string indicating the CTA button's style, one of 'primary', 'secondary', or 'tertiary'.
 * @returns A React element representing the CTA button.
 */
import React from 'react';

import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

export interface CTAProps {
  readonly fields: {
    link: {
      value: {
        href: string;
        text: string;
        target?: string;
      };
    };
    category: {
      value: 'primary' | 'secondary' | 'tertiary';
    };
  };
}

const CTA: React.FC<CTAProps> = ({ fields }) => {
  const getButtonStyle = () => {
    switch (fields.category?.value || 'primary') {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'secondary':
        return 'bg-gray-300 text-black';
      case 'tertiary':
        return 'bg-transparent text-blue-500 border border-blue-500';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <div data-testid="cta-detail">
      <Link field={fields.link} className={`inline-block rounded px-4 py-2 ${getButtonStyle()}`}>
        {fields.link.value.text}
      </Link>
    </div>
  );
};

export default CTA;
