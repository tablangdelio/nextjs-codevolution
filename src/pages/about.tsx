import Layout from '@/components/Layout'
import NoHeaderLayout from '@/components/NoHeaderLayout'
import React from 'react'
import type { ReactElement } from 'react'
const About = () => {
  return <div>about</div>
}

export default About

About.getLayout = function getLayout(page: ReactElement) {
  return <NoHeaderLayout>{page}</NoHeaderLayout>
}
