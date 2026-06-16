import { ref, watch } from 'vue'

// Use a UNIQUE key for New York Noir so it doesn't fight with the main Velvet site
const STORAGE_KEY = 'new-york-noir-theme'

// Create a reactive theme state
const currentTheme = ref(localStorage.getItem(STORAGE_KEY) || 'classic')

// Theme mapping specifically for the Noir collection
const themeMap = {
  classic: 'noir-classic',
  rosegold: 'noir-rosegold',
  ivory: 'noir-ivory',
  espresso: 'noir-espresso',
}

// Initialize theme on app load
// Only runs on /noir routes so it never touches the main Velvet site
export function initializeTheme() {
  const isNoirPage = window.location.pathname.startsWith('/noir')

  if (isNoirPage) {
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'classic'
    currentTheme.value = savedTheme
    applyTheme(savedTheme)
  }
}

// Apply theme to the Noir system only
export function applyTheme(theme) {
  // Update the data attribute specifically for Noir
  document.documentElement.setAttribute('data-noir-theme', theme)

  // Only remove and add Noir-specific classes — never touches main site classes
  const noirClass = themeMap[theme]
  if (noirClass) {
    Object.values(themeMap).forEach(c => {
      document.documentElement.classList.remove(c)
    })
    document.documentElement.classList.add(noirClass)
  }

  // Save to its own unique storage slot, separate from main site
  localStorage.setItem(STORAGE_KEY, theme)
  currentTheme.value = theme
}

// Watch for changes and apply them
watch(currentTheme, (newTheme) => {
  applyTheme(newTheme)
})

export function useTheme() {
  return {
    currentTheme,
    setTheme: applyTheme,
  }
}
