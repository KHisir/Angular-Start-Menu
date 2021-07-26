import { SizeType } from './sizeType';
import { AnimationType } from './animationType';

export class MenuTileItem {
  public Name: string;
  public Icon: string;
  public SizeType: SizeType;
  public Description: string;
  public AnimationType: AnimationType;

  constructor(
    name: string,
    icon: string,
    sizeType: SizeType = SizeType.Medium,
    description: string = '',
    animationType: AnimationType = AnimationType.None
  ) {
    this.Name = name;
    this.Icon = icon;
    this.SizeType = sizeType;
    this.Description = description;
    this.AnimationType = animationType;
  }
}
