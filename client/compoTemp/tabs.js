import { Tab } from '@headlessui/react'

export function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Projects</Tab>
        <Tab>Websites</Tab>
        <Tab>Analytics</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Next</Tab.Panel>
        <Tab.Panel>React</Tab.Panel>
        <Tab.Panel>GitHub</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}


export default function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}