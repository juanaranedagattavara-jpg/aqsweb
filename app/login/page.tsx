import Link from 'next/link'

export default function LoginPage() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-black flex min-h-screen items-center justify-center px-4 py-12 md:py-20">
            <form
                action=""
                className="w-full max-w-md rounded-2xl border border-primary-500/30 bg-gray-900/50 backdrop-blur-sm shadow-2xl shadow-primary-500/20">
                <div className="p-8">
                    {/* Logo / Home Link */}
                    <div>
                        <Link
                            href="/"
                            aria-label="Go home"
                            className="inline-block"
                        >
                            <div className="text-3xl font-bold text-primary-400 mb-2">
                                QSP Analytics
                            </div>
                        </Link>
                        <h1 className="mt-6 text-pretty text-2xl font-semibold leading-snug">
                            <span className="block text-gray-300 mb-2">¡Bienvenido de vuelta!</span>
                            <span className="text-primary-400">Inicia sesión para continuar</span>
                        </h1>
                    </div>

                    {/* Social Buttons */}
                    <div className="mt-8 space-y-3">
                        <button
                            type="button"
                            className="w-full flex items-center gap-3 bg-white/5 border border-primary-500/30 text-white hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-300 px-6 py-3 rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 256 262"
                            >
                                <path
                                    fill="#4285f4"
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                />
                                <path
                                    fill="#34a853"
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                />
                                <path
                                    fill="#fbbc05"
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                                />
                                <path
                                    fill="#eb4335"
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                />
                            </svg>
                            <span>Continuar con Google</span>
                        </button>

                        <button
                            type="button"
                            className="w-full flex items-center gap-3 bg-white/5 border border-primary-500/30 text-white hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-300 px-6 py-3 rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="#1877f2"
                                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                                />
                                <path
                                    fill="#fff"
                                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                                />
                            </svg>
                            <span>Continuar con Facebook</span>
                        </button>

                        <button
                            type="button"
                            className="w-full flex items-center gap-3 bg-white/5 border border-primary-500/30 text-white hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-300 px-6 py-3 rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 256 256"
                            >
                                <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z" />
                                <path fill="#80cc28" d="M256 121.666H134.335V0H256z" />
                                <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z" />
                                <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z" />
                            </svg>
                            <span>Continuar con Microsoft</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="my-8 flex items-center">
                        <div className="h-px flex-1 bg-primary-500/30" />
                        <span className="px-3 text-sm text-gray-400">o</span>
                        <div className="h-px flex-1 bg-primary-500/30" />
                    </div>

                    {/* Email Login */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 bg-gray-800/50 text-white placeholder-gray-400 border border-primary-500/30 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 transition-all duration-300"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white border-0 shadow-lg hover:shadow-primary-500/25 transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
                        >
                            Continuar
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 border-t border-primary-500/30 text-center">
                    <p className="text-sm text-gray-400">
                        ¿No tienes una cuenta?{' '}
                        <Link href="#" className="text-primary-400 hover:text-primary-300 underline">
                            Crear una
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}
