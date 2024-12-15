import SectionLayout from '@components/common/SectionLayout';
import { useRouter } from 'next/router';
import MenuItem from './MenuItem';
import { TMenu } from '@constants/index';

interface IProps {
  heading: string;
  items: TMenu[];
}

export default function MenuSection({ heading, items }: IProps) {
  const router = useRouter();

  return (
    <SectionLayout heading={heading} style={{ paddingBottom: 0 }}>
      <ul>
        {items.map(menu => (
          <MenuItem
            key={menu.name}
            onMenuClick={() => router.push(`${router.pathname}${menu.path}`)}
          >
            {menu.name}
          </MenuItem>
        ))}
      </ul>
    </SectionLayout>
  );
}
