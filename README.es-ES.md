

# SvelteKit

Todo lo que necesitas para crear un proyecto Svelte, impulsado por [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), desplegado en [Vercel](https://vercel.com).

## Despliega tu propio proyecto

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsveltekit&project-name=sveltekit-vercel&repository-name=sveltekit-vercel&demo-title=SvelteKit%20%2B%20Vercel&demo-description=A%20SvelteKit%20app%20optimized%20Edge-first.&demo-url=https%3A%2F%2Fsveltekit-template.vercel.app%2F)

_Ejemplo en vivo: https://sveltekit-template.vercel.app_

## Crear un proyecto

Si estás viendo esto, probablemente ya hayas completado este paso. ¡Felicidades!

```bash
# crear un nuevo proyecto en el directorio actual
npm init svelte@next

# crear un nuevo proyecto en my-app
npm init svelte@next my-app
```

> Nota: el `@next` es temporal

## Desarrollo

Una vez que hayas creado un proyecto e instalado las dependencias con `npm install` (o `pnpm install` o `yarn`), inicia un servidor de desarrollo:

```bash
npm run dev

# o inicia el servidor y abre la aplicación en una nueva pestaña del navegador
npm run dev -- --open
```

## Compilación

Esto utiliza adapter-auto para SvelteKit, el cual detecta Vercel y ejecuta adapter-vercel en tu nombre.

```bash
npm run build
```

> Puedes previsualizar la aplicación compilada con `npm run preview`, independientemente de si instalaste un adapter. Esto _no_ debe usarse para servir tu aplicación en producción.
