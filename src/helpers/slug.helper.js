const generateSlug = (value) => {
    // El método replace utiliza la expresión regular /\s/g para buscar todos los espacios en blanco
    // (incluyendo espacios, tabulaciones y saltos de línea) de forma global y reemplazarlos por un guion.
    const slug = value.toLowerCase().replace(/\s/g, '-');
    return slug;
}

export default generateSlug