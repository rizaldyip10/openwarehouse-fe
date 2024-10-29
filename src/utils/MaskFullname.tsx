export function MaskFullname(fullname: string) {
  const fullnameLength = fullname.length;
  if (fullnameLength > 12) {
    const [firstName, lastName] = fullname.split(' ');
    if (!lastName) {
      return firstName;
    }
    return `${firstName} ${lastName[0]}`;
  } else {
    return fullname;
  }
}
