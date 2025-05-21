import { createFileRoute } from '@tanstack/react-router'
import { InvitationCard } from '@/components/InvitationCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState, useEffect, useRef } from 'react'
import { Wand2, Palette, UserCircle, Star, Printer } from 'lucide-react'
import html2canvas from 'html2canvas-pro'
export const Route = createFileRoute('/')({
  component: App,
})

// 定义不同的动画方向
const entranceAnimations = [
  'slide-in-from-top',
  'slide-in-from-bottom',
  'slide-in-from-left',
  'slide-in-from-right',
  'zoom-in',
  'zoom-in-95',
]

function App() {
  const [guestName, setGuestName] = useState('Guest Name')
  const [gradientFrom, setGradientFrom] = useState('purple-950')
  const [gradientTo, setGradientTo] = useState('indigo-950')
  const [animationComplete, setAnimationComplete] = useState(false)
  const [cardAnimation, setCardAnimation] = useState('')
  const [formAnimation, setFormAnimation] = useState('')

  const decorElements = useRef(
    Array(5)
      .fill(null)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        duration: Math.random() * 10 + 5,
      })),
  )

  // 页面加载动画效果
  useEffect(() => {
    // 随机选择不同的动画方向
    setCardAnimation(
      entranceAnimations[Math.floor(Math.random() * entranceAnimations.length)],
    )
    setFormAnimation(
      entranceAnimations[Math.floor(Math.random() * entranceAnimations.length)],
    )

    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // 固定默认值和用户输入值
  const cardValues = {
    guestName: guestName,
    ctfName: 'D³ctf',
    invitationType: 'INVITATION',
    gradientFrom: gradientFrom,
    gradientTo: gradientTo,
  }

  const gradientOptions = [
    { value: 'purple-950', label: 'Deep Purple' },
    { value: 'blue-950', label: 'Deep Blue' },
    { value: 'indigo-950', label: 'Deep Indigo' },
    { value: 'slate-950', label: 'Deep Slate' },
  ]

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-0 transition-all duration-500 overflow-hidden">
      {/* 浮动装饰元素 */}
      {decorElements.current.map((el, index) => (
        <div
          key={index}
          className="absolute pointer-events-none opacity-30 blur-sm"
          style={{
            top: `${el.y}%`,
            left: `${el.x}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            transform: `rotate(${el.rotation}deg)`,
            animation: `float ${el.duration}s ease-in-out ${el.delay}s infinite alternate`,
          }}
        >
          {index % 2 === 0 ? (
            <div className="w-full h-full rounded-full bg-primary/50 animate-pulse" />
          ) : (
            <Star className="w-full h-full text-primary/60 animate-spin-slow" />
          )}
        </div>
      ))}

      <div className="container max-w-5xl px-4 mx-auto flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Preview Section */}
        <div
          id="printable-card"
          className={`lg:sticky lg:top-6 transition-all duration-500 hover:scale-[1.01] hover:-rotate-1 opacity-0 ${
            animationComplete
              ? `animate-in fade-in ${cardAnimation} duration-700 delay-100 fill-mode-forwards opacity-100`
              : ''
          }`}
        >
          <InvitationCard {...cardValues} />
        </div>

        {/* Configuration Section */}
        <Card
          className={`flex-1 w-full max-w-md backdrop-blur-md bg-card/90 border border-border/50 shadow-lg transition-all duration-500 hover:shadow-xl opacity-0 ${
            animationComplete
              ? `animate-in fade-in ${formAnimation} duration-700 delay-200 fill-mode-forwards opacity-100`
              : ''
          }`}
        >
          <CardHeader className="space-y-2">
            <div className="flex items-center space-x-2">
              <Wand2 className="w-5 h-5 text-primary animate-in spin-in-180 duration-500" />
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                自定义邀请函
              </CardTitle>
            </div>
            <CardDescription className="text-muted-foreground/80">
              请输入受邀人姓名及选择背景渐变颜色以生成您的邀请函
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group relative">
                <div className="flex items-center space-x-2">
                  <UserCircle className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary/70 transition-colors" />
                  <Label
                    htmlFor="guestName"
                    className="text-base transition-colors group-hover:text-primary"
                  >
                    受邀人姓名
                  </Label>
                </div>
                <div className="relative max-w-xs mx-auto">
                  <Input
                    id="guestName"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="transition-all duration-300 border-border/50 focus:border-primary/50 focus:ring-primary/20 pr-8 text-center"
                    placeholder="请输入姓名"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 pointer-events-none">
                    <UserCircle className="w-full h-full animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary/70 transition-colors" />
                  <Label className="text-base transition-colors group-hover:text-primary">
                    背景渐变颜色
                  </Label>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="gradientFrom"
                      className="text-xs text-muted-foreground"
                    >
                      渐变起始
                    </Label>
                    <Select
                      value={gradientFrom}
                      onValueChange={setGradientFrom}
                    >
                      <SelectTrigger className="transition-all duration-300 border-border/50 focus:border-primary/50 focus:ring-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {gradientOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="transition-colors duration-200 hover:bg-primary/10"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="gradientTo"
                      className="text-xs text-muted-foreground"
                    >
                      渐变结束
                    </Label>
                    <Select value={gradientTo} onValueChange={setGradientTo}>
                      <SelectTrigger className="transition-all duration-300 border-border/50 focus:border-primary/50 focus:ring-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {gradientOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="transition-colors duration-200 hover:bg-primary/10"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full transition-all duration-300 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault()
                    // 使用html2canvas导出卡片为图片
                    const cardElement =
                      document.getElementById('printable-card')
                    if (cardElement) {
                      // 临时移除动画类
                      const avatarImages = cardElement.querySelectorAll(
                        '.animate-pulse, .animate-spin',
                      )
                      const originalClasses: string[] = []

                      avatarImages.forEach((img: Element) => {
                        originalClasses.push(img.className)
                        img.className = img.className
                          .replace('animate-pulse', '')
                          .replace('animate-spin', '')
                      })

                      html2canvas(cardElement, {
                        scale: 10, // 提高导出图片质量
                        backgroundColor: 'transparent', // 透明背景
                        logging: false,
                        useCORS: true,
                      }).then((canvas) => {
                        // 转换为图片并下载
                        const image = canvas.toDataURL('image/png')
                        const link = document.createElement('a')
                        link.href = image
                        link.download = `${guestName}-invitation.png`
                        link.click()

                        // 恢复动画类
                        avatarImages.forEach((img: Element, index: number) => {
                          img.className = originalClasses[index]
                        })
                      })
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                  <Printer className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  保存邀请函
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* 装饰元素 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
