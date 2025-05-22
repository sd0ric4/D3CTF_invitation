import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useTranslation } from 'react-i18next'
import binaryNinjaSvg from '@/icon/binary_ninja.svg'
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
  gradientFrom = 'purple-950',
  gradientTo = 'indigo-950',
  ctfName = 'D³ctf',
  invitationType = 'INVITATION',
}: InvitationCardProps) {
  const { t } = useTranslation()
  // 创建渐变类名映射
  const gradientClasses = {
    // 从颜色
    'from-purple-950': gradientFrom === 'purple-950',
    'from-blue-950': gradientFrom === 'blue-950',
    'from-indigo-950': gradientFrom === 'indigo-950',
    'from-slate-950': gradientFrom === 'slate-950',
    // 到颜色
    'to-purple-950': gradientTo === 'purple-950',
    'to-blue-950': gradientTo === 'blue-950',
    'to-indigo-950': gradientTo === 'indigo-950',
    'to-slate-950': gradientTo === 'slate-950',
  }

  // 将类名映射转换为字符串
  const gradientClassNames = Object.entries(gradientClasses)
    .filter(([_, isActive]) => isActive)
    .map(([className]) => className)
    .join(' ')

  return (
    <Card
      className={`invitation-card w-1/4 min-w-[320px] max-w-[400px] aspect-[9/16] bg-gradient-to-r ${gradientClassNames} px-4 py-10 text-center flex flex-col print:aspect-auto print:min-w-full print:min-h-screen print:max-w-none print:py-16`}
    >
      <div className="flex-1 flex flex-col justify-evenly">
        {/* CTF Logo */}
        <div className="my-6 print:my-4">
          <h1 className="text-6xl font-bold text-blue-500 print:text-8xl">
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
          <h2 className="text-5xl font-bold tracking-wider text-gray-100 print:text-7xl">
            {t('invitation.invitation', invitationType)}
          </h2>
        </div>

        {/* Guest Section */}
        <div className="my-8 print:my-20">
          <p className="text-xl text-gray-200 print:text-3xl">
            {t('invitation.opening')}
          </p>
          <p className="text-3xl text-blue-400 my-2 print:text-5xl font-bold">
            {guestName}
          </p>
          <p className="text-xl text-gray-200 print:text-3xl">
            {t('invitation.closing')}
          </p>
        </div>

        {/* Sponsors */}
        <div className="mt-auto mb-3 print:my-4">
          <div className="my-2 print:my-10">
            <p className="text-l text-gray-200 print:text-xl">
              {t('invitation.sponsoredBy')}
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-1 print:justify-between print:px-[5%] print:gap-4">
            <a
              href="https://binary.ninja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 group/link hover:scale-105 transition-transform"
            >
              <Avatar className="w-8 h-8 print:w-18 print:h-18">
                <AvatarImage
                  src={binaryNinjaSvg}
                  alt="Binary Ninja"
                  className="object-contain animate-pulse group-hover/link:animate-spin print:animate-none"
                />
                <AvatarFallback>BN</AvatarFallback>
              </Avatar>
              <span className="text-xs font-bold text-gray-200 whitespace-nowrap group-hover/link:text-blue-400 transition-colors print:text-2xl">
                Binary Ninja
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
                  className="object-contain animate-pulse group-hover/link:animate-spin print:animate-none"
                />
                <AvatarFallback>GC</AvatarFallback>
              </Avatar>
              <span className="text-xs font-bold text-gray-200 whitespace-nowrap group-hover/link:text-blue-400 transition-colors print:text-2xl">
                Google Cloud
              </span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
