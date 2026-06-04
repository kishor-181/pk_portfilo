import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <span className="section-label">
        <span className="w-8 h-px bg-primary inline-block" />
        {label}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
