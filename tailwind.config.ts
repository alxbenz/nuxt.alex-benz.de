module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 15s linear infinite',
                'pulse-weak': 'pulseWeak 3s linear infinite',
                'fade-in-up': 'fIU 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                'fade-in': 'fI 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            keyframes: {
                pulseWeak: {
                    '0%, 100%': { opacity: 0.05 },
                    '50%': { opacity: 0.2 },
                },
                fIU: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    }
                },
                fI: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    }
                },
            },
        }
    },
}