import '@/app/ui/global.css';
import { inter, notoSans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
