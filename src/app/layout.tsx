import './globals.css'

export const metadata = {
  title: 'Thatzim',
  description: 'Platforms of zim transformations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>{children}</body>
    </html>
  )
}
