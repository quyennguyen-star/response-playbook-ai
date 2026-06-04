import { createTheme } from '@mantine/core';

// Greyscale palette from tokens.css — 10 shades (index 0 lightest → 9 darkest)
const grey = [
  '#FFFFFF', // 0  — white
  '#F7F8FA', // 1  — grey-050
  '#F0F2F5', // 2  — grey-100
  '#E1E4E8', // 3  — grey-200
  '#C5CAD3', // 4  — grey-300
  '#A4ABB6', // 5  — grey-400
  '#848B96', // 6  — grey-500
  '#656C76', // 7  — grey-600
  '#484F59', // 8  — grey-700
  '#2C323A', // 9  — grey-800
];

const danger = [
  '#FEF2F2',
  '#FFE2E2',
  '#FFC9C9',
  '#FFA8A8',
  '#FF7A7A',
  '#FF4D4D',
  '#E60000',
  '#CC0000',
  '#A30000',
  '#7A0000',
];

const success = [
  '#F0FDF4',
  '#DCFCE7',
  '#BBF7D0',
  '#86EFAC',
  '#4ADE80',
  '#22C55E',
  '#16A34A',
  '#15803D',
  '#166534',
  '#14532D',
];

const warning = [
  '#FFF7E5',
  '#FFF0CC',
  '#FEE5A6',
  '#FED676',
  '#FFC440',
  '#F1AB17',
  '#D48F00',
  '#A16A00',
  '#855500',
  '#5D3A00',
];

export const theme = createTheme({
  // ── Identity ─────────────────────────────────────────────────────────
  primaryColor: 'dark',
  primaryShade: 9,

  // ── Colour palette ────────────────────────────────────────────────────
  colors: {
    grey,
    danger,
    success,
    warning,
  },

  black: '#0A0B0D',
  white: '#FFFFFF',

  // ── Typography ────────────────────────────────────────────────────────
  fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', 'Fira Code', Menlo, monospace",
  headings: {
    fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '2rem',    lineHeight: '1.2' },
      h2: { fontSize: '1.5rem',  lineHeight: '1.3' },
      h3: { fontSize: '1.25rem', lineHeight: '1.4' },
      h4: { fontSize: '1rem',    lineHeight: '1.5' },
      h5: { fontSize: '0.875rem', lineHeight: '1.5' },
      h6: { fontSize: '0.75rem', lineHeight: '1.5' },
    },
  },

  fontSizes: {
    xs:  '0.75rem',   // 12px
    sm:  '0.8125rem', // 13px
    md:  '0.875rem',  // 14px
    lg:  '1rem',      // 16px
    xl:  '1.125rem',  // 18px
  },

  lineHeights: {
    xs:  '1.4',
    sm:  '1.45',
    md:  '1.5',
    lg:  '1.55',
    xl:  '1.6',
  },

  // ── Shape ─────────────────────────────────────────────────────────────
  defaultRadius: 'sm',

  radius: {
    xs:  '0.25rem',  // 4px
    sm:  '0.5rem',   // 8px
    md:  '0.75rem',  // 12px
    lg:  '1rem',     // 16px
    xl:  '1.5rem',   // 24px
  },

  // ── Spacing ───────────────────────────────────────────────────────────
  spacing: {
    xs:  '0.5rem',   // 8px
    sm:  '0.75rem',  // 12px
    md:  '1rem',     // 16px
    lg:  '1.5rem',   // 24px
    xl:  '2rem',     // 32px
  },

  // ── Shadows — subtle, shadcn-style ───────────────────────────────────
  shadows: {
    xs:  '0 1px 2px rgba(0,0,0,0.05)',
    sm:  '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
    md:  '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.05)',
    lg:  '0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.04)',
    xl:  '0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.03)',
  },

  // ── Cursor ────────────────────────────────────────────────────────────
  cursorType: 'pointer',

  // ── Component overrides — shadcn aesthetic ────────────────────────────
  components: {
    Button: {
      defaultProps: { size: 'sm' },
      styles: {
        root: {
          fontWeight: '500',
          letterSpacing: '0',
        },
      },
    },
    Input: {
      styles: {
        input: {
          border: '1px solid #E1E4E8',
          '&:focus': { borderColor: '#0A0B0D', boxShadow: '0 0 0 1px #0A0B0D' },
        },
      },
    },
    Card: {
      defaultProps: { shadow: 'sm', radius: 'sm', withBorder: true },
      styles: { root: { border: '1px solid #E1E4E8' } },
    },
    Badge: {
      defaultProps: { variant: 'light', size: 'sm' },
    },
    Table: {
      defaultProps: { striped: false, highlightOnHover: true, withTableBorder: true, withColumnBorders: false },
      styles: {
        th: { fontSize: '0.75rem', fontWeight: '600', color: '#848B96', textTransform: 'uppercase', letterSpacing: '0.05em' },
      },
    },
    Modal: {
      defaultProps: { radius: 'md', shadow: 'lg' },
      styles: { header: { borderBottom: '1px solid #E1E4E8' } },
    },
    Tabs: {
      defaultProps: { variant: 'default' },
    },
    Select: {
      defaultProps: { size: 'sm' },
    },
    TextInput: {
      defaultProps: { size: 'sm' },
    },
    Textarea: {
      defaultProps: { size: 'sm' },
    },
    Checkbox: {
      defaultProps: { size: 'sm' },
    },
    Switch: {
      defaultProps: { size: 'sm' },
    },
    Radio: {
      defaultProps: { size: 'sm' },
    },
    Tooltip: {
      defaultProps: { withArrow: true, arrowSize: 6 },
      styles: {
        tooltip: { fontSize: '0.75rem', padding: '4px 8px' },
      },
    },
    Notification: {
      styles: { root: { border: '1px solid #E1E4E8' } },
    },
    Paper: {
      defaultProps: { shadow: 'sm', radius: 'sm' },
      styles: { root: { border: '1px solid #E1E4E8' } },
    },
    Divider: {
      styles: { root: { borderColor: '#E1E4E8' } },
    },
    Avatar: {
      defaultProps: { size: 'sm', radius: 'xl' },
    },
    Menu: {
      styles: {
        dropdown: { border: '1px solid #E1E4E8', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07)' },
        item: { fontSize: '0.875rem' },
      },
    },
    NavLink: {
      styles: {
        root: { borderRadius: '6px', fontSize: '0.875rem' },
      },
    },
  },
});
