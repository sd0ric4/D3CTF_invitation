import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useTranslation } from 'react-i18next'
import hexRaysSvg from '@/icon/hexrays.svg'
import googleCloudSvg from '@/icon/google_cloud.svg'

interface InvitationCardProps {
  guestName: string
  gradientFrom?: string
  gradientTo?: string
  ctfName?: string
  invitationType?: string
}

export function InvitationCard({
  guestName = 'Guest Name',
  gradientFrom = 'blue-300',
  gradientTo = 'indigo-300',
  ctfName = 'D³ctf',
  invitationType = 'INVITATION',
}: InvitationCardProps) {
  const { t } = useTranslation()
  // 创建渐变类名映射
  const gradientClasses = {
    // 从颜色
    'from-blue-300': gradientFrom === 'blue-300',
    'from-indigo-300': gradientFrom === 'indigo-300',
    'from-blue-500': gradientFrom === 'blue-500',
    'from-emerald-300': gradientFrom === 'emerald-300',
    // 到颜色
    'to-blue-300': gradientTo === 'blue-300',
    'to-indigo-300': gradientTo === 'indigo-300',
    'to-blue-500': gradientTo === 'blue-500',
    'to-emerald-300': gradientTo === 'emerald-300',
  }

  // 将类名映射转换为字符串
  const gradientClassNames = Object.entries(gradientClasses)
    .filter(([_, isActive]) => isActive)
    .map(([className]) => className)
    .join(' ')

  return (
    <Card
      className={`invitation-card w-[min(340px,85vw)] mx-auto lg:w-1/4 lg:min-w-[320px] lg:max-w-[400px] aspect-[9/16] bg-gradient-to-r ${gradientClassNames} px-4 py-10 text-center flex flex-col print:aspect-auto print:min-w-full print:min-h-screen print:max-w-none print:py-16`}
    >
      <div className="flex-1 flex flex-col justify-evenly">
        {/* CTF Logo */}
        <div className="my-6 print:my-4">
          <h1 className="text-6xl font-bold text-black print:text-8xl">
            {ctfName === 'D³ctf' ? (
              <>
                D<sup>3</sup>CTF
              </>
            ) : (
              ctfName
            )}
          </h1>
        </div>

        {/* Invitation Title */}
        <div className="my-6 print:my-16">
          <h2 className="text-5xl font-bold tracking-wider text-blue-950 print:text-7xl">
            {t('invitation.invitation', invitationType)}
          </h2>
        </div>

        {/* Guest Section */}
        <div className="my-8 print:my-20">
          <p className="text-xl text-slate-700 print:text-3xl">
            {t('invitation.opening')}
          </p>
          <p className="text-3xl text-black my-2 print:text-5xl font-bold">
            {guestName}
          </p>
          <p className="text-xl text-slate-700 print:text-3xl">
            {t('invitation.closing')}
          </p>
        </div>

        {/* Sponsors */}
        <div className="mt-auto mb-3 print:my-4">
          <div className="my-2 print:my-10">
            <p className="text-l text-slate-700 print:text-xl">
              {t('invitation.sponsoredBy')}
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-1 print:justify-between print:px-[5%] print:gap-4">
            <a
              href="https://hex-rays.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 group/link hover:scale-105 transition-transform"
            >
              <Avatar className="w-8 h-8 print:w-18 print:h-18">
                <AvatarImage
                  src={hexRaysSvg}
                  alt="Hex-Rays"
                  className="object-contain group-hover/link:animate-spin print:animate-none"
                />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap group-hover/link:text-blue-700 transition-colors print:text-2xl">
                Hex-Rays
              </span>
            </a>
            <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 group/link hover:scale-105 transition-transform"
            >
              <Avatar className="w-8 h-8 print:w-18 print:h-18">
                <AvatarImage
                  src={googleCloudSvg}
                  alt="Google Cloud"
                  className="object-contain group-hover/link:animate-spin print:animate-none"
                />
                <AvatarFallback>GC</AvatarFallback>
              </Avatar>
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap group-hover/link:text-blue-700 transition-colors print:text-2xl">
                Google Cloud
              </span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
