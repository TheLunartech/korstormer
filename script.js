// ============================================================
// Editable site settings
// ============================================================

// WhatsApp number in international format, without "+" or spaces.
const WHATSAPP_PHONE = "233594045086";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Korstomer, I would like to make an enquiry.";

// Edit this list to add, remove, rename, or reorder services in
// the moving brand rail and footer animation.
const BRANDS = [
  {
    name: "Spotify",
    iconUrl: "https://cdn.simpleicons.org/spotify/1ED760",
  },
  {
    name: "Apple Music",
    iconUrl: "https://cdn.simpleicons.org/apple/FFFFFF",
  },
  {
    name: "Prime Video",
    iconUrl: "https://cdn.simpleicons.org/primevideo/00A8E1",
  },
  {
    name: "Apple TV",
    iconUrl: "https://cdn.simpleicons.org/appletv/FFFFFF",
  },
  {
    name: "Netflix",
    iconUrl: "https://cdn.simpleicons.org/netflix/E50914",
  },
  {
    name: "YouTube",
    iconUrl: "https://cdn.simpleicons.org/youtube/FF0000",
  },
  {
    name: "Google Ads",
    iconUrl: "https://cdn.simpleicons.org/googleads/4285F4",
  },
  {
    name: "WhatsApp",
    iconUrl: "https://cdn.simpleicons.org/whatsapp/25D366",
  },
  {
    name: "Canva",
    iconUrl: "https://cdn.simpleicons.org/canva/00C4CC",
  },
  {
    name: "CapCut",
    iconUrl: "https://cdn.simpleicons.org/capcut/000000",
    needsLightBackground: true,
  },
  {
    name: "Audiomack",
    iconUrl: "https://cdn.simpleicons.org/audiomack/FFA200",
  },
];

// ============================================================
// WhatsApp links
// ============================================================

function createWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  return "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodedMessage;
}

function initializeWhatsAppLinks() {
  document.querySelectorAll(".wa").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const message = link.dataset.msg || DEFAULT_WHATSAPP_MESSAGE;
      window.open(createWhatsAppUrl(message), "_blank", "noopener");
    });
  });
}

// ============================================================
// Reusable brand animations
// ============================================================

function createBrandItem(brand, itemClassName, showName) {
  const item = document.createElement("div");
  const darkLogoClass = brand.needsLightBackground ? " darkLogo" : "";

  item.className = itemClassName + darkLogoClass;

  const image = document.createElement("img");
  image.src = brand.iconUrl;
  image.alt = brand.name;

  if (!showName) {
    image.title = brand.name;
  }

  item.appendChild(image);

  if (showName) {
    const label = document.createElement("span");
    label.textContent = brand.name;
    item.appendChild(label);
  }

  return item;
}

function renderBrandLoop(containerId, itemClassName, showName = false) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  // Repeat the list so the CSS animation loops without an empty gap.
  [...BRANDS, ...BRANDS].forEach((brand) => {
    container.appendChild(createBrandItem(brand, itemClassName, showName));
  });
}

// ============================================================
// Page initialization
// ============================================================

function initializeSite() {
  initializeWhatsAppLinks();

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  renderBrandLoop("brandRail", "brandChip", true);
  renderBrandLoop("footerIcons", "moveIcon");
}

initializeSite();
