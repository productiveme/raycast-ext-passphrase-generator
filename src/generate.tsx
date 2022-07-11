import niceware from 'niceware';
import { popToRoot, closeMainWindow, Clipboard, Detail } from "@raycast/api";

const leet = (str: string) => {
  let returnVal = str;
  const chars = {
    a: "4",
    e: "3",
    l: "1",
    o: "0",
    s: "5",
    i: "|"
  }
  Object.keys(chars).forEach(k => {
    returnVal = returnVal.replace(new RegExp(k, 'g'), (chars as any)[k]);
  });
  return returnVal;
}

export default async () => {
  const passphrase = niceware.generatePassphrase(8);

  const idxUpper = Math.floor(Math.random() * passphrase.length);
  const idxLeet = Math.floor(Math.random() * passphrase.length);
  passphrase[idxUpper] = passphrase[idxUpper].charAt(0).toUpperCase() + passphrase[idxUpper].substr(1);
  passphrase[idxLeet] = leet(passphrase[idxLeet]);

  await closeMainWindow();
  await Clipboard.copy(passphrase.join(' ,.'[Math.floor(Math.random()*3)]));
  await popToRoot();
};