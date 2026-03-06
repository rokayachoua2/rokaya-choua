import { useState, useEffect } from 'react';

export function useTypingEffect(roles, typingSpeed = 55, deletingSpeed = 35, delayBetweenRoles = 900) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer;
        const currentRole = roles[loopNum % roles.length];

        if (isDeleting) {
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(currentRole.substring(0, text.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        } else {
            if (text.length < currentRole.length) {
                timer = setTimeout(() => {
                    setText(currentRole.substring(0, text.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenRoles);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed, deletingSpeed, delayBetweenRoles]);

    return text;
}
