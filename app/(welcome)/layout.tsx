import Navbar from "@/components/navbar/Navbar"

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Background */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-500 rounded-full blur-3xl opacity-10 pointer-events-none z-0" />

      {/* Contenu */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mt-15 md:mt-20">
          {children}
        </main>
      </div>
    </>
  )
}