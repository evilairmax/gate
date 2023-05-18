export const yearsOld = (): number => {
    const today: Date = new Date();
    const birthDate: Date = new Date(1996, 1, 5);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
