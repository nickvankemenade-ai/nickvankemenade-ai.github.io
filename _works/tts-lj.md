---
title: tts-LJ
date: 2026-11-18
featured: false
summary: "A text-to-speech system trained from scratch on a laptop: a flow-matching model that turns text into a spectrogram, and a HiFi-GAN vocoder that turns the spectrogram into sound."
thumb: /assets/works/tts-lj/card.webp
links:
  - label: Code
    url: https://github.com/nickvankemenade-ai/tts-LJ
---

## Listen

Two sentences generated from text at 1.3× speed. Each word is drawn where the model placed it.

{% include audio-sample.html image="/assets/works/tts-lj/report.webp" audio="/assets/works/tts-lj/report.mp3" duration="4.3" text="Let me know when you've finished reading the report, and we can discuss it." alt="waveform and spectrogram of the generated sentence 'Let me know when you've finished reading the report, and we can discuss it.', with each word marked where the model placed it" %}

{% include audio-sample.html image="/assets/works/tts-lj/questions.webp" audio="/assets/works/tts-lj/questions.mp3" duration="3.7" text="If you have any questions, feel free to reach out at any time." alt="waveform and spectrogram of the generated sentence 'If you have any questions, feel free to reach out at any time.', with each word marked where the model placed it" %}

## How it works

I built a text-to-speech system in two stages and trained both from scratch on LJSpeech, a public dataset of one speaker reading non-fiction, on a laptop RTX 4060. It uses no pretrained weights, no external aligner and no phonemizer: the model reads plain characters and learns how spelling maps to sound from the data alone.

<figure class="wide">
  <img class="flat" src="/assets/works/tts-lj/pipeline.webp" alt="the pipeline: text, a text encoder, per-letter means stretched by duration, a flow-matching decoder, an 80-band log-mel spectrogram, a HiFi-GAN vocoder and 16 kHz audio" loading="lazy">
</figure>

**Text to mel** (15.2M parameters), after Matcha-TTS. A transformer encoder predicts a mean spectrogram frame and a duration for every letter. During training, monotonic alignment search finds which letters belong to which frames, so the model learns its own timing. A flow-matching decoder then turns noise into an 80-band mel spectrogram in 20 steps.

**Mel to audio** (13.9M parameters), after HiFi-GAN. The vocoder upsamples the spectrogram 256 times into a 16 kHz waveform.

A small web app goes with it: type text and hear it, or record, load or paint a spectrogram and hear what the vocoder makes of it.

<script>
document.querySelectorAll('.sample').forEach(function (s) {
  var au = s.querySelector('audio'), btn = s.querySelector('.play'), line = s.querySelector('.playhead'), t = s.querySelector('.sample-time');
  function fmt(x) { return x.toFixed(1) + ' s'; }
  function tick() {
    if (!au.duration) return;
    line.style.left = (4 + 92 * au.currentTime / au.duration) + '%';
    t.textContent = fmt(au.currentTime) + ' / ' + fmt(au.duration);
    if (!au.paused) requestAnimationFrame(tick);
  }
  btn.addEventListener('click', function () {
    document.querySelectorAll('.sample audio').forEach(function (o) { if (o !== au) o.pause(); });
    if (au.paused) au.play(); else au.pause();
  });
  au.addEventListener('play', function () { s.classList.add('playing', 'started'); tick(); });
  au.addEventListener('pause', function () { s.classList.remove('playing'); });
  au.addEventListener('ended', function () { s.classList.remove('started'); });
});
</script>
