const previews = [...document.querySelectorAll('.video-preview')];
const dialog = document.querySelector('.video-dialog');
const fullVideo = dialog.querySelector('.full-video');
const closeButton = dialog.querySelector('.close-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let activePreview = null;

function loadVideo(video) {
  if (!video.getAttribute('src')) video.src = video.dataset.src;
}

function stopPreview(preview) {
  preview.querySelector('video').pause();
  preview.classList.remove('is-playing');
}

async function playPreview(preview) {
  if (reducedMotion.matches || dialog.open || document.hidden) return;
  for (const otherPreview of previews) {
    if (otherPreview !== preview) stopPreview(otherPreview);
  }
  const video = preview.querySelector('video');
  loadVideo(video);
  video.muted = true;
  try {
    await video.play();
    if (!dialog.open && (preview.matches(':hover') || preview.matches(':focus-visible'))) {
      preview.classList.add('is-playing');
    } else {
      stopPreview(preview);
    }
  } catch {
    stopPreview(preview);
  }
}

for (const preview of previews) {
  preview.addEventListener('pointerenter', () => {
    if (finePointer.matches) playPreview(preview);
  });
  preview.addEventListener('pointerleave', () => stopPreview(preview));
  preview.addEventListener('focus', () => playPreview(preview));
  preview.addEventListener('blur', () => stopPreview(preview));
  preview.addEventListener('click', () => {
    for (const otherPreview of previews) stopPreview(otherPreview);
    activePreview = preview;
    const video = preview.querySelector('video');
    fullVideo.src = video.dataset.src;
    fullVideo.poster = video.poster;
    fullVideo.muted = false;
    dialog.showModal();
    document.body.classList.add('modal-open');
    fullVideo.play().catch(() => {});
    closeButton.focus();
  });
}

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  fullVideo.pause();
  fullVideo.removeAttribute('src');
  fullVideo.load();
  document.body.classList.remove('modal-open');
  activePreview?.focus({ preventScroll: true });
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    for (const preview of previews) stopPreview(preview);
    fullVideo.pause();
  }
});
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) stopPreview(entry.target);
  }
});
for (const preview of previews) observer.observe(preview);
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) for (const preview of previews) stopPreview(preview);
});