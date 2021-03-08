export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function nav() {
  // The nav is always active
  return true;
}

export function objectStorage(location) {
  return prefix(location, "object-storage");
}

export function CNA(location) {
  return prefix(location, "cna");
}
