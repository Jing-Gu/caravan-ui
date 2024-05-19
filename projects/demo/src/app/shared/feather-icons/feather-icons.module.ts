import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Settings, Heart, Github,
  Info, CheckCircle, XCircle, AlertTriangle, ShoppingBag,
  Trash2, Edit, ArrowRightCircle, Plus, Minus, ChevronDown, ChevronUp, Menu, Star,
  ThumbsUp, Smile, Edit2 } from 'angular-feather/icons';

const icons = {
  Settings,
  Heart,
  Github,
  Info,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ShoppingBag,
  Trash2,
  Edit,
  ArrowRightCircle,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  ThumbsUp,
  Smile,
  Edit2
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule { }
