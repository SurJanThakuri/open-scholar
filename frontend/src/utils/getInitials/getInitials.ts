// Extract initials from full name or initials prop
  export const getInitials = (name: string) => {
    const nameParts = name.trim().split(' ');
    const firstInitial = nameParts[0]?.[0]?.toUpperCase() || '';
    const lastInitial = nameParts[1]?.[0]?.toUpperCase() || '';
    return `${firstInitial}.${lastInitial}`;
  };