import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Area */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Hi, I’m Junyuan.</h1>
        <p className="mt-4 text-xl">
          I build immersive AR/VR experiences & digital marketing campaigns.
        </p>
      </section>

      {/* About Area */}
      <section className="max-w-2xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          我是 Junyuan，拥有 5 年时尚零售和 1 年内容策略经验，…
        </p>
      </section>

      {/* Projects Area */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 这里可以用你自己写的 <ProjectCard /> 组件 */}
          <div className="border p-4 rounded-lg">
            <Image src="/project1.png" alt="Project 1" width={400} height={240}/>
            <h3 className="mt-4 text-xl font-medium">Project One</h3>
            <p className="mt-2 text-sm">项目描述…</p>
          </div>
          {/* 更多项目卡片… */}
        </div>
      </section>
    </main>
  )
}