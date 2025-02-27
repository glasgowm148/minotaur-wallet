import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ConfigType {
  DisplayMode = 'DISPLAY_MODE',
}

@Entity({ name: 'config' })
class Config {
  @PrimaryGeneratedColumn()
  id = 0;

  @Column('text', { unique: true })
  key: string = ConfigType.DisplayMode;

  @Column('text')
  value = '';
}

export default Config;
