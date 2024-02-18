/** Formats name retrieved from API into hyphen format used by image files. */
export default function nameToHyphen(val) {
	let name = [];
	for (let i = 0; i < val.length; i++) {
		if (val[i] === ' ') {
			name.push('-');
		} else if (val[i] === "'") {
			continue;
		} else {
			name.push(val[i].toLowerCase());
		}
	}
	return name.join('');
}
