const CustomStyles = {
  cardStyles: {
    default: {
      borderRadius: '9px',
    },
    certificate: {
      borderRadius: 0,
      background:
        'repeating-linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 2px, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 5px)',
      backgroundPosition: 'center',
      backgroundSize: 'calc(100% - 16px) calc(100% - 16px)',
      backgroundRepeat: 'no-repeat',
    },
  },
  clickableStyles: {
    elevate: {
      cursor: 'pointer',
      '&:hover': {
        boxShadow:
          '0 16px 16px 0 rgba(32, 32, 32, 0.05), 0 8px 8px 0 rgba(42, 42, 42, 0.05), 0 4px 4px 0 rgba(49, 49, 49, 0.05), 0 2px 2px 0 rgba(45, 45, 45, 0.05), 0 64px 64px 0 rgba(35, 35, 35, 0.05), 0 32px 32px 0 rgba(49, 49, 49, 0.05)',
        transform: 'translateY(-10px)',
      },
      '&:active': {
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
      },
    },
    hoverUnderline: {
      cursor: 'pointer',
      '&:link': {
        textDecoration: 'none',
      },
      '&:visited': {
        textDecoration: 'none',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:active': {
        textDecoration: 'underline',
      },
    },
  },
};

export default CustomStyles;
