// YouTube publish dates (ISO 8601) for the set videos. schema.org/VideoObject
// requires `uploadDate` — without it Google Search flags a critical Video
// structured-data error and withholds the video rich results (confirmed in
// Search Console: 4 invalid items, "uploadDate field missing"). Keyed by
// YouTube video id so every language version of a set page (en/pt/es) reads
// the date from this one place. V3InteriorLayout looks the id up and only
// emits `uploadDate` when a non-empty date is present here.
//
// Dates below are Antonio's actual YouTube publish dates. Use the date the
// video went public on the channel; a plain YYYY-MM-DD is valid, a full
// timestamp (e.g. 2026-05-14T09:00:00-03:00) is even better.
export const videoUploadDates = {
  mWqUmkWs3wY: '',    // Greenvalley - Opening the 17th Anniversary
  twN80oij1Uw: '',    // SLS Dubai - 75 Floors Up
  'lcOJEm9-DjI': '',  // FENDI x Yachthouse - 300 Meters Above
  IRV1sNs9aTk: '',    // Amazon Basin - A Sunset Journey Home
};
